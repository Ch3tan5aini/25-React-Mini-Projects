import React from "react";

const ProfileCard = ({ data }) => {
  const {
    avatar_url,
    bio,
    created_at,
    followers,
    following,
    location,
    name,
    login,
    public_repos,
  } = data;

  const startingDate = new Date(created_at).getFullYear();

  return (
    <div>
      <section className="text-white body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-2/4 sm:w-2/3 content-start py-3 rounded-md  border-solid border-2 bg-gray-900">
            <div className="w-full sm:p-4 px-4 mb-6 flex flex-col justify-center items-center">
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img
                  className="object-cover object-center w-full h-full"
                  src={avatar_url}
                  alt="UserImg"
                />
              </div>
              <h1 className="title-font font-medium text-xl mb-2">
                {name || login}
              </h1>
              <div className="leading-relaxed">{bio || location}</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
              <h2 className="title-font font-medium text-3xl ">
                {followers || "0"}
              </h2>
              <p className="leading-relaxed text-gray-300">Followers</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
              <h2 className="title-font font-medium text-3xl ">
                {following || "0"}
              </h2>
              <p className="leading-relaxed text-gray-300">Following</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
              <h2 className="title-font font-medium text-3xl ">
                {public_repos || "0"}
              </h2>
              <p className="leading-relaxed text-gray-300">Public_Repos</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
              <h2 className="title-font font-medium text-3xl ">
                {startingDate || "0"}
              </h2>
              <p className="leading-relaxed text-gray-300">Created At</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
