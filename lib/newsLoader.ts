import fs from 'fs';
import path from 'path';

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

export function getNewsArticles(): NewsArticle[] {
  try {
    const newsDir = path.join(process.cwd(), 'app', 'news');

    if (!fs.existsSync(newsDir)) {
      return [];
    }

    const files = fs.readdirSync(newsDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    if (mdFiles.length === 0) {
      return [];
    }

    const articles = mdFiles.map(filename => {
      const filePath = path.join(newsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const lines = fileContent.split('\n');
      let title = '';
      let date = '';
      let category = '';
      let content = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('# ')) {
          title = line.substring(2).trim();
        } else if (line.startsWith('date:')) {
          date = line.substring(5).trim();
        } else if (line.startsWith('category:')) {
          category = line.substring(9).trim();
        } else if (line && !line.startsWith('#') && !line.includes(':')) {
          content = lines.slice(i).join('\n').trim();
          break;
        }
      }

      if (!date) {
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
        date = dateMatch ? dateMatch[1] : '';
      }

      return {
        id: filename.replace('.md', ''),
        title: title || filename.replace('.md', ''),
        date: date || '',
        category: category || 'AI资讯',
        content: content || fileContent,
      };
    });

    articles.sort((a, b) => {
      if (a.date && b.date) {
        return b.date.localeCompare(a.date);
      }
      return b.id.localeCompare(a.id);
    });

    return articles;
  } catch (error) {
    console.error('Error loading news articles:', error);
    return [];
  }
}

export function getNewsArticleById(id: string): NewsArticle | null {
  const articles = getNewsArticles();
  return articles.find(article => article.id === id) || null;
}
