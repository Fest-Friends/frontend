import Button from "../ui/Button";

export function HomeBackground() {


  return (
    <div className="w-full py-20 flex flex-col gap-2 items-center text-sm leading-[19.6px] bg-home bg-no-repeat bg-cover"
    >
        <div className="text-2xl leading-[33.6px]">
          공연 <span className="text-primary font-semibold">같이 볼 프렌즈</span>가 필요한가요?
        </div>
        <div className="text-textLess">
        공연을 위한 나만의 페스트프렌즈를 찾아보세요!
        </div>
        <div className="mt-6">
        <Button  variant="default" width="111px" text="프렌즈 찾기"/>
        </div>
    </div>
  )
}