#!/usr/bin/env node

/**
 * Image Compression Script
 * 
 * This script compresses images in the public directory to improve loading performance.
 * Run with: node compress-images.js
 * 
 * Requirements: Install sharp
 * npm install --save-dev sharp
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, 'public')
const QUALITY = 80
const MAX_WIDTH = 1920

async function compressImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath)
    const fileSizeInMB = stats.size / (1024 * 1024)
    
    if (fileSizeInMB < 0.5) {
      console.log(`Skipping ${path.basename(inputPath)} (already optimized: ${fileSizeInMB.toFixed(2)}MB)`)
      return
    }

    // Use temporary file for compression
    const tempPath = outputPath + '.tmp'
    
    await sharp(inputPath)
      .resize(MAX_WIDTH, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(tempPath)
    
    // Replace original with compressed version
    fs.renameSync(tempPath, outputPath)
    
    const newStats = fs.statSync(outputPath)
    const newSizeInMB = newStats.size / (1024 * 1024)
    const savings = ((fileSizeInMB - newSizeInMB) / fileSizeInMB * 100).toFixed(1)
    
    console.log(`✓ ${path.basename(inputPath)}: ${fileSizeInMB.toFixed(2)}MB → ${newSizeInMB.toFixed(2)}MB (${savings}% smaller)`)
  } catch (error) {
    console.error(`Error compressing ${path.basename(inputPath)}:`, error.message)
    // Clean up temp file if it exists
    const tempPath = outputPath + '.tmp'
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath)
    }
  }
}

async function compressImages() {
  console.log('🖼️  Starting image compression...\n')
  
  const files = fs.readdirSync(PUBLIC_DIR)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('compressed')
  )
  
  if (imageFiles.length === 0) {
    console.log('No images found to compress.')
    return
  }
  
  // Create backup directory
  const backupDir = path.join(PUBLIC_DIR, 'original-images')
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir)
  }
  
  for (const file of imageFiles) {
    const inputPath = path.join(PUBLIC_DIR, file)
    const backupPath = path.join(backupDir, file)
    const outputPath = inputPath // Overwrite original
    
    // Backup original
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath)
    }
    
    await compressImage(inputPath, outputPath)
  }
  
  console.log('\n✅ Image compression complete!')
  console.log(`📁 Original images backed up to: ${backupDir}`)
}

// Check if sharp is available and run compression
try {
  await compressImages()
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.log('📦 Sharp not found. Install it first:')
    console.log('npm install --save-dev sharp')
    console.log('\nThen run: node compress-images.js')
  } else {
    console.error('Error:', error.message)
  }
}