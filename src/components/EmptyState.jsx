import addMemoIcon from '../assets/add-memo.svg'
import IconButton from './IconButton.jsx'

function EmptyState() {
  return (
    <section className="flex h-[710px] w-full flex-col items-center justify-center gap-[10px] rounded-3xl border-2 border-dashed border-blue-02">
      <IconButton
        icon={addMemoIcon}
        label="메모 추가"
        className="h-[120px] w-[120px] bg-blue-02 hover:bg-blue-03 [&_img]:h-[39px] [&_img]:w-[39px]"
      />

      <p className="text-heading-medium font-semibold text-blue-02">
        새로운 메모를 작성해보세요!
      </p>
    </section>
  )
}

export default EmptyState