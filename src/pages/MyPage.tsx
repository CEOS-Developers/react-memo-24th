import { useNavigate } from "react-router-dom";
import backIcon from "../assets/icons/icon-back.svg";
import editIcon from "../assets/icons/icon-edit.svg";
import listIcon from "../assets/icons/icon-list.svg";
import profileIcon from "../assets/icons/icon-profile.svg";
import trashIcon from "../assets/icons/icon-trash-blue.svg";

function MyPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-blue-01 px-6 py-16">
      <div className="mx-auto w-full max-w-[1100px]">
        <button
          type="button"
          onClick={() => navigate("/memos")}
          aria-label="메모 목록으로 돌아가기"
          className="flex h-10 w-10 cursor-pointer items-center justify-center"
        >
          <img src={backIcon} alt="" aria-hidden="true" className="h-6 w-6" />
        </button>

        <div className="mx-auto mt-36 w-full max-w-[480px]">
          <section className="flex items-center gap-8">
            <div className="flex h-40 w-40 shrink-0 items-center justify-center gap-5 rounded-full bg-white p-12">
              <img
                src={profileIcon}
                alt="프로필 이미지"
                className="h-16 w-16"
              />
            </div>

            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-[48px] font-bold leading-[56px] text-blue-07">
                  닉네임
                </h1>

                <button
                  type="button"
                  aria-label="닉네임 수정"
                  className="cursor-pointer"
                >
                  <img
                    src={editIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </button>
              </div>

              <p className="mt-2 text-2xl font-semibold text-gray-04">
                아이디아이디아이디
              </p>
            </div>
          </section>

          <section className="mt-[72px] flex flex-col gap-4">
            <button
              type="button"
              className="flex h-14 w-full cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 text-body-medium font-bold text-blue-07 shadow-[0_2px_2px_rgba(0,27,81,0.25)]"
            >
              <img
                src={listIcon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              태그 관리
            </button>

            <button
              type="button"
              className="flex h-14 w-full cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 text-body-medium font-bold text-blue-07 shadow-[0_2px_2px_rgba(0,27,81,0.25)]"
            >
              <img
                src={trashIcon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              휴지통
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default MyPage;
