import { fetchArticles } from "@/lib/fetch";
import ArticlesCard from "./ArticleCard";

export default async function WisdomGenerator() {
  const wisdomData = await fetchArticles();
  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-10 mb-32">
      {wisdomData.map((article) => (
        <ArticlesCard
          key={article.articleId}
          name={article.articlesName}
          note={article.note}
          link={article.articlesLink}
          createdAt={article.createdAt.toString().split("G")[0]}
          createdBy={article.createdBy}
        />
      ))}
    </div>
  );
}
