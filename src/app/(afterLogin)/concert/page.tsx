import CategoryTitle from './_component/CategoryTitle';
import CategoryList from './_component/CategoryList';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <CategoryTitle />
      <CategoryList />
    </div>
  );
}
