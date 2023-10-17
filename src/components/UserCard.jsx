import { IconSquareX } from "@tabler/icons-react";

const UserCard = ({
  isShowModal,
  handelCloseModal,
  handleSubmit,
  register,
  submit,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${
        isShowModal ? "visible opacity-100 " : "invisible opacity-0"
      } `}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)]   relative"
      >
        <h2 className="text-center text-lg font-semibold">add user</h2>
        <button
          onClick={handelCloseModal}
          type="button"
          className="text-red-500 top-2 right-2 absolute"
        >
          <IconSquareX />
        </button>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="first_name">
            first_name
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="last_name">
            last_name
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="email">
            email
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="password">
            password
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="password"
            type="text"
            {...register("password")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="birthday">
            birthday
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold rounded-s-sm"
          type="submit"
        >
          add
        </button>
      </form>
    </section>
  );
};
export default UserCard;
