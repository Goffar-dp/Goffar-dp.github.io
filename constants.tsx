
import { NewsItem, Publication, Project, CoffeeLog } from './types';

export const NEWS_DATA: NewsItem[] = [
  {
    date: "Dec, 2025",
    content: "Co-authored paper published: Analyzing Media Narratives of the 2024 Bangladesh Mass Movement Using Topic Modeling, Machine Learning, and Explainable AI: News from Bangladesh, India, and Pakistan at ICCIT 2025 (28th International Conference on Computer and Information Technology, Long Beach Hotel, Cox's Bazar, Bangladesh, organized by the IEEE)",
    link: "https://iccit.org.bd/2025/home/",
    linkText: "ICCIT 2025"
  },
  {
    date: "Nov, 2025",
    content: "Early results from MSc thesis accepted as contributory poster at ICASDS 2025 (International Conference on Applied Statistics and Data Science, ISRT, Dhaka University)",
    link: "https://icasds2025.isrt.ac.bd",
    linkText: "ICASDS 2025"
  },
  {
    date: "Nov, 2025",
    content: "Co-authored paper published: Trends and determinants of antenatal care use and quality in Bangladesh in PLOS One",
    link: "https://doi.org/10.1371/journal.pone.0337449",
    linkText: "doi:10.1371/journal.pone.0337449"
  },
  {
    date: "Mar, 2025",
    content: "Started as Graduate Research Assistant in Dr. Md. Maniruzzaman's Lab, Statistics Discipline, Khulna University",
    link: "https://ku.ac.bd/discipline/stat/faculty/monir.stat91",
    linkText: "Maniruzzaman Lab"
  },
  {
    date: "Jan, 2025",
    content: "Graduated from Khulna University with B.Sc. Statistics!",
    link: "https://ku.ac.bd/discipline/stat",
    linkText: "Statistics Dept"
  },
  {
    date: "Dec, 2024",
    content: "Completed Research Assistant position (Jun 2023 – Dec 2024) at Sutapa Dey Barna's Lab, Statistics Discipline, Khulna University",
    link: "https://ku.ac.bd/discipline/stat/faculty/sutapaborna.ku",
    linkText: "Sutapa Barna Lab"
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-0",
    title: "Analyzing Media Narratives of the 2024 Bangladesh Mass Movement Using Topic Modeling, Machine Learning, and Explainable AI: News from Bangladesh, India, and Pakistan",
    authors: "Sish Ahemmed Shozol, Md. Goffar Hossain, et al.",
    venue: "28th International Conference on Computer and Information Technology (ICCIT) 2025, Cox's Bazar, Bangladesh (IEEE)",
    year: 2025,
    thumbnail: "ICCIT",
    type: "Paper",
    pdfUrl: "https://iccit.org.bd/2025/home/",
    doi: "10.1109/ICCIT.2025.XXXX"
  },
  {
    id: "pub-1",
    title: "Developing an Ensemble Model for Predicting Depression among School Teachers: A Cross-sectional Study in Rajshahi and Khulna Regions of Bangladesh",
    authors: "Md. Goffar Hossain, Md. Showrov Hossain, Md. Sakhawat Arfin, Md. Shoebuj Zaman, Md. Asadujjaman, Tonmoy Kumar Roy, Sharlene Alauddin, and Md. Maniruzzaman",
    venue: "Contributory Poster, International Conference on Applied Statistics and Data Science (ICASDS) 2025, ISRT, Dhaka University",
    year: 2025,
    thumbnail: "ICASDS",
    type: "Poster",
    pdfUrl: "https://icasds2025.isrt.ac.bd"
  },
  {
    id: "pub-2",
    title: "Trends and determinants of antenatal care use and quality in Bangladesh: Insights from demographic and health survey data",
    authors: "Sutapa Dey Barna, Abdul Quayyum, Md. Goffar Hossain, Akhtarul Islam, Fuad Rahman",
    venue: "PLOS One",
    year: 2025,
    thumbnail: "PLOS ONE",
    type: "Paper",
    doi: "10.1371/journal.pone.0337449",
    pdfUrl: "https://doi.org/10.1371/journal.pone.0337449"
  },
  {
    id: "pub-3",
    title: "Impact of Covid-19 outbreak on the food habits and nutritional status of Khulna's citizens",
    authors: "Sutapa Dey Barna, Md. Abdul Quayyum, and Md. Goffar Hossain",
    venue: "Poster Presentation, IQAC-2025 Conference, Khulna University",
    year: 2025,
    thumbnail: "IQAC",
    type: "Poster",
    pdfUrl: "#"
  },
  {
    id: "pub-4",
    title: "Cross-National Media Framing of Mass Movements: A Comparative Study of the July 2024 Uprising in South Asia",
    authors: "Sish Ahemmed Shozol and Md. Goffar Hossain",
    venue: "Poster Presentation, International Conference on July Revolution (ICJR-I), 2025",
    year: 2025,
    thumbnail: "ICJR",
    type: "Poster",
    pdfUrl: "#"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "ragBE – Bilingual Retrieval-Augmented Generation System",
    description: "A fully functional RAG system for conversational Q&A in English and Bengali. Supports PDF/DOCX/TXT ingestion, multilingual semantic search (paraphrase-multilingual-MiniLM-L12-v2 embeddings), ChromaDB vector store, and Google Gemini LLM orchestration via LangChain.",
    category: "Featured Project",
    imageText: "RAG",
    githubUrl: "https://github.com/Goffar-dp/ragBE",
    demoUrl: "https://ragbe0.streamlit.app/"
  }
];

export const COFFEE_LOGS: CoffeeLog[] = [
  {
    id: "log-1",
    title: "Log #1 — Local Coffee Potential in Bangladesh",
    date: "20 December 2025",
    tldr: "Exploring whether Bangladesh’s emerging local coffee beans can support a thoughtful, premium coffee brand.",
    content: [
      "The coffee market in Bangladesh is still relatively small, but it is changing. While tea remains dominant, coffee consumption—especially in urban areas—is steadily growing. Cafés, home brewers, and specialty coffee spaces are becoming more common, yet the underlying supply chain remains largely dependent on imported beans.",
      "At present, most premium coffee consumed in Bangladesh is sourced from countries such as Ethiopia, Brazil, and Vietnam. These imports define both the flavor expectations and the pricing structure of the market. While imported beans often deliver consistent quality, they also introduce higher costs, logistical complexity, and vulnerability to currency and supply fluctuations.",
      "This dependency raises an important question: can local coffee play a meaningful role in filling this gap?",
      "### Emerging Local Regions",
      "Recent discussions and early experiments point to regions such as Bandarban and Sylhet as potential coffee-growing areas. Although still in early stages, these regions show distinct characteristics. Beans from Bandarban are often described as more balanced and earthy, while Sylhet-grown beans tend to lean brighter and fruit-forward.",
      "These profiles are not yet standardized, and consistency remains a challenge. However, the presence of identifiable regional traits suggests that local coffee has the potential to develop its own identity rather than imitate imported profiles.",
      "### Market Opportunity",
      "The current market appears polarized. On one end, instant and low-grade coffee dominates everyday consumption. On the other, fully imported specialty coffee occupies a premium niche that is often expensive and inaccessible to many consumers.",
      "A locally sourced, carefully roasted coffee could occupy a middle ground: premium in quality, but grounded in local production. Such an approach could reduce reliance on imports while allowing for greater experimentation with roasting profiles, freshness, and process control.",
      "### Project Direction",
      "The O-H-H-O project is an exploration of this possibility. The focus is not on rapid scaling, but on understanding fundamentals: sourcing, roasting behavior, flavor development, and consistency when working with local beans. Each step is treated as an experiment rather than a finished product.",
      "### Looking Ahead",
      "This log marks the starting point. Future entries will examine specific regions in more detail, explore roasting trials, and reflect on the practical challenges of working with local supply chains. The goal is to document what is learned over time—both limitations and opportunities—without assumptions.",
      "For now, this project remains an open question worth exploring."
    ]
  }
];
