import Image from "./Image";

const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8 ">
      <din className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500 ">2 days ago</span>
      </din>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            sint excepturi repellendus autem sit laudantium culpa non aliquam
            earum eaque recusandae at, doloremque.
          </p>
        </div>
    </div>
  );
};

export default SingleComment;
