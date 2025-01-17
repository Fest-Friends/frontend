import CategoryItem from "@/app/(afterLogin)/concert/_component/CategoryItem";
import { concertItemData } from "@/app/(afterLogin)/concert/_constants/concertItemData";

export const HotConcertList =  () => (
  <>
  {concertItemData?.map((item,idx) => (
    <CategoryItem
      key={item.id}
      name={item.name}
      location={item.location}
      period={item.period}
      imageUrl={item.imageUrl}
      likes={item.likes}
      searchFriends={item.searchFriends}
      isLike={item.isLike}
      isFirst={idx===0}
    />
  ))}
  </>
)