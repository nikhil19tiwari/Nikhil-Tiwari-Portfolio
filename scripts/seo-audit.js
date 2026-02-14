import fs from 'fs'
import path from 'fs'

const auditSEO = () => {
  console.log('🔍 Running SEO Audit...\n')
  
  const issues = []
  const warnings = []
  
  // Check for meta tags in index.html
  const indexPath = path.join(process.cwd(), 'index.html')
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8')
    
    if (!indexContent.includes('<title>')) {
      issues.push('❌ Missing title tag in index.html')
    }
    
    if (!indexContent.includes('meta name="description"')) {
      issues.push('❌ Missing meta description in index.html')
    }
    
    if (!indexContent.includes('meta name="keywords"')) {
      warnings.push('⚠️ Missing meta keywords in index.html')
    }
    
    if (!indexContent.includes('meta property="og:image"')) {
      warnings.push('⚠️ Missing Open Graph image')
    }
  }
  
  // Check for sitemap
  if (!fs.existsSync(path.join(process.cwd(), 'public', 'sitemap.xml'))) {
    warnings.push('⚠️ Missing sitemap.xml')
  }
  
  // Check for robots.txt
  if (!fs.existsSync(path.join(process.cwd(), 'public', 'robots.txt'))) {
    warnings.push('⚠️ Missing robots.txt')
  }
  
  // Check for manifest
  if (!fs.existsSync(path.join(process.cwd(), 'public', 'site.webmanifest'))) {
    warnings.push('⚠️ Missing site.webmanifest')
  }
  
  // Print results
  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ Perfect! No SEO issues found!\n')
  } else {
    issues.forEach(issue => console.log(issue))
    warnings.forEach(warning => console.log(warning))
  }
  
  console.log('\n📊 SEO Score:', issues.length === 0 ? 'A+' : issues.length < 3 ? 'B' : 'C')
}

auditSEO()