"use client";
import Link from "next/link";

export const CreateProduct = () => {
  // const BACKEND_ENDPOINT = "http://localhost:3000/sign-up";

  // const handleOnSubmit = async (event) => {
  //   event.preventDefault();

  //   const userData = {
  //     name: event.target.name.value,
  //     password: event.target.password.value,
  //   };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   };

  //   const response = await fetch(BACKEND_ENDPOINT, options);
  //   const data = await response.json();

  //   console.log(data);
  // };
  return (
    <div className="">
      <div className="flex w-full h-screen">
        <div className="w-full h-full flex pt-[200px] justify-center">
          <div className="w-[384px] h-[426px] flex flex-col gap-10">
            <div className="flex justify-center items-center gap-[10px] p-[6px]"></div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold leading-8 text-[#0F172A]">
                Бараа үүсгэх
              </h1>
            </div>

            <div>
              <form
              // className="flex flex-col gap-3"
              // action=""
              // onSubmit={handleOnSubmit}
              >
                <p className="pt-5">Барааны нэр</p>
                <input
                  type="text"
                  name="name"
                  placeholder="T-shirt"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
                <p className="pt-5">Барааны ангилал</p>
                <select className="select w-[539px] clear-start text-gray-400 bg-[#F4F4F4] h-[56px] rounded-xl">
                  <optgroup label="type">
                    <option value="Shirt">Цамц</option>
                    <option value="Pants">Өмд</option>
                    <option value="Outer">Гадуур хувцас</option>
                    <option value="Shoes">Гутал</option>
                  </optgroup>
                </select>
                <p className="pt-5">Үнэ</p>
                <input
                  type="text"
                  name="price"
                  placeholder="50.000"
                  className="input input-bordered text-[#A3A3A3] text-base w-full  border  border-[#D1D5DB] bg-[#F3F4F6]"
                />
              </form>
            </div>
            <div className="flex gap-5 h-8 justify-end items-center">
              <Link href="./sign-in">
                <button className="btn btn-outline text-base leading-7 text-gray-500">
                  Буцах
                </button>
              </Link>
              <Link href="./sign-in">
                <button className="btn btn-outline btn-neutral text-base leading-7 text-gray-500">
                  Үүсгэх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
