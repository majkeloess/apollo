import ArticlesCard from "@/components/ArticleCard";
import { fetchArticles } from "@/lib/fetch";
export default async function WisdomPage() {
  const musicData = await fetchArticles();

  return (
    <div className="w-full flex justify-center">
      <div className="mt-24">
        <div className="text-4xl text-center mb-6">Wisdom</div>
        <div className="flex flex-col gap-6 items-center mx-6">
          {musicData.map((article) => (
            <ArticlesCard
              name={article.name}
              note={article.note}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
