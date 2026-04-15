import { motion } from 'framer-motion';

const team = [
  {
    name: 'Suhas Bhasin',
    role: 'Director',
    image: '/team/team-member1.png',
    bio: 'Mr. Bhasin, a Mechanical Engineer from BITS Pilani, brings over 38 years of expertise in gas generation technology. He is instrumental in strategy formulation, operational leadership, and hydrogen technology development, driving process excellence, enhanced efficiency, and sustained business growth through strategic innovation.'
  },
  {
    name: 'M. B. Srinath',
    role: 'Vice President',
    image: '/team/team-member4.png',
    bio: 'Mr. M. B. Srinath, Vice President – Gas Generation Group at SEPL, brings over 38 years of experience in engineering, project management, and gas generation technologies. He leads overall development, operations, and project execution, ensuring delivery excellence and performance, and is widely recognized for his technical expertise and leadership in executing global gas generation projects.'
  },
  {
    name: 'Avnissh Vatts',
    role: 'Director',
    image: '/team/team-member2.png',
    bio: 'Mr. Vatts, a Mechanical Engineer with an MBA in Marketing, brings 21+ years of leadership experience across gas generation systems, fluid handling, and industrial solutions. His career spans key roles at Mahindra, Swagelok and at Spirare Energy, he drives business strategy and innovation across global markets.'
  },
  {
    name: 'Chandan Sanyal',
    role: 'Global Business Head',
    image: '/team/team-member3.png',
    bio: 'Mr. Sanyal, a Mechanical Engineer with 17+ years of experience in sales, marketing, and business development, brings strong technical expertise in fluid handling systems, custom integration, and product development. With prior experience at Circor Instrumentation and Swagelok, he plays a key role in driving Spirare Energy’s growth across India and global markets.'
  }
];

const TeamSection = () => {
  return (
    <section id="leadership" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #003882 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-brand-navy uppercase italic"
            style={{ WebkitTextStroke: '2px rgba(0, 56, 130, 0.1)' }}
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400 drop-shadow-sm">LEADERSHIP</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group bg-white p-4 rounded-[3rem] border border-brand-blue/5 shadow-xl shadow-brand-blue/5 hover:shadow-brand-blue/10 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 shadow-md shadow-brand-blue/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex-grow space-y-3 px-2">
                <div>
                  <h4 className="text-xl font-bold text-brand-navy tracking-tight">{member.name}</h4>
                  <p className="text-brand-blue text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
                <p className="text-brand-muted text-[11px] leading-relaxed font-medium line-clamp-6">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
