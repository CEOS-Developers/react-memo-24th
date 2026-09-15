import Star from '../assets/Star.svg';
import StarRed from '../assets/Star_red.svg';

const tagColors = {
  Daily: '#7BA7FF',
  Work: '#0037A3',
  Others: '#A6B7CB',
};

function Memo({ title, content, tag, date, isImportant }) {
  return (
    <article
      className="flex h-[285px] w-[285px] flex-col rounded-[20px] px-[20px] py-[12px] text-[#FAFAFA]"
      style={{ backgroundColor: tagColors[tag] }}
    >
      <div className="flex items-start justify-between">
        <h2 className="text-[20px] leading-[28px] font-bold">{title}</h2>

        <button type="button" className="shrink-0 cursor-pointer">
          <img
            src={isImportant ? StarRed : Star}
            alt={isImportant ? '중요 메모' : '일반 메모'}
          />
        </button>
      </div>

      <p className="mt-[12px] line-clamp-7 text-[14px] leading-[20px] font-normal">
        {content}
      </p>

      <div className="mt-auto flex items-center justify-between pt-[20px] text-[14px] leading-[20px] font-normal">
        <span>{tag}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default Memo;
