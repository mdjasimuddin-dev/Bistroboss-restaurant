import chefServicesBg from "./../../../assets/Home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className={`relative`}>
      <img src={chefServicesBg} className="w-full h-40 lg:h-auto lg:relative" alt="" />
      {/* top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 */}
      <div className="lg:absolute lg:top-20 lg:bottom-20 lg:left-16 lg:right-16 bg-white lg:p-10 text-center flex flex-col justify-center items-center">
        <h3 className="text-3xl my-2 lg:text-5xl font-cinzel">Bistro Boss</h3>
        <p className="lg:w-3/6 mx-auto py-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
