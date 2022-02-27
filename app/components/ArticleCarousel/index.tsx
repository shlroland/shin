import demoImg from './IMG_031434567.jpeg'

export const ArticleCarousel = () => {
  return (
    <div className="border second-bg box-shadow radius">
      <div
        className="relative flex w-full h-[316px] bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${demoImg})` }}
      />
    </div>
  )
}
