import Link from "next/link";
import Image from "next/image";
<style></style>
const TeamSection = () => {


  const Team = [
    {
      id: 1,
      image: '/assets/img/team/team-1.jpg',
      name: 'Jacqueline Haynes',
      role: "Managing Director",
      bio: "/biography/biography1",

    },
    {
      id: 2,
      image: '/assets/img/team/team-2.jpg',
      name: 'Lyndon Mlinde',
      role: "Operations Lead",
      bio: "/biography/biography2"
    },
    {
      id: 3,
      image: '/assets/img/team/team-5.jpg',
      name: 'Clement Namanyah',
      role: "Partnerships Manager",
      bio: "/biography/biography5"
    },
    {
      id: 4,
      image: '/assets/img/team/team-3.jpg',
      name: 'Pachawo Bisani',
      role: "Data Manager",
      bio: "/biography/biography3"
    },
    {
      id: 5,
      image: '/assets/img/team/team-4.jpg',
      name: 'Atusaghe Mushani',
      role: "Legal Manager",
      bio: "/biography/biography4"
    },
    {
      id: 6,
      image: '/assets/img/team/team-6.jpg',
      name: 'Grace Konzaufe',
      role: "Admin Manager",
      bio: "#"
    },
   
  ]
  return (
    <section id="team" className="team section-bg">
      <div className="container justify-content-center">
        <div className="section-title" data-aos="fade-up">
          <h2>
            Our <strong>Team</strong>
          </h2>
        </div>

        <div className="row justify-content-center">
          {Team.map ((teams)=>(

<div key={teams.id} className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img text-center">
              <Image
                  src={teams.image}
                  className="img-fluid"
                  alt={teams.name}
                  width={500}
                  height={500}
                  style={{
                    width: "100%", 
                    height: "400px",
                    width: "500px",  
                    objectFit: "cover", // Ensures the image fits well without distortion
                    borderRadius: "10px" // Optional: adds rounded corners
                  }}
                />
              </div>
              <div className="member-info text-start mt-3">
                <h4 style={{color: 'steelblue'}} >{teams.name}</h4>
                <span className="fs-5">{teams.role}</span>
                <Link
                  href={teams.bio}
                  style={{color: 'steelblue'}}
                  className=" mt-2 d-block text-decoration-none fw-bold"
                >
                  Read biography
                </Link>
              </div>
            </div>
          </div>
          ))}
          

        </div>
      </div>
    </section>
  );
};

export default TeamSection;











