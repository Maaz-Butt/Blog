import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-4">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae
          eos ab corporis velit reprehenderit itaque illum nobis. Dolorum
          dolores, in quod consequuntur nemo tenetur. Impedit dolore amet
          provident. Possimus.
        </p>
      </div>
    </div>
  );
};

export default Comment;
