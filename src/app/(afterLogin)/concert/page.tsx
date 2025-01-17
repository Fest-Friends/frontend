import CategoryTitle from './_component/CategoryTitle';
import CategoryList from './_component/CategoryList';
import Input from '@/app/_component/ui/Input';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full px-5 py-6">
        <Input type="text" role="search" placeholder="콘서트 이름을 검색하세요." isImg />
      </div>
      <CategoryTitle />
      <CategoryList />
    </div>
  );
}
