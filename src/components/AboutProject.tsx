import { GraduationCap, MapPin, Calendar, Users, BookOpen, Award } from 'lucide-react';

const teamMembers = [
  { name: 'Shaik Mohammad Abrarul Haq', reg: '24F21A05F5', role: 'Project Lead' },
  { name: 'Divvala Naveen Sai', reg: '24F21A0XXX', role: 'Team Member' },
  { name: 'Sidda Nikhil', reg: '24F21A0XXX', role: 'Team Member' },
  { name: 'Vajrala Tharakeshwar Mouryan Vyas', reg: '24F21A0XXX', role: 'Team Member' },
  { name: 'Chenna Mahendra', reg: '24F21A0XXX', role: 'Team Member' },
];

const projectInfo = [
  { icon: GraduationCap, label: 'College', value: 'GATES Institute of Technology (Autonomous)', color: 'text-cyber-primary' },
  { icon: BookOpen, label: 'Department', value: 'Computer Science and Engineering', color: 'text-cyber-secondary' },
  { icon: Award, label: 'Guide', value: 'Ms. Venkata Lakshmi, M.Tech', color: 'text-cyber-accent' },
  { icon: Calendar, label: 'Duration', value: '20 April 2026 – 18 June 2026', color: 'text-cyber-warning' },
  { icon: MapPin, label: 'Location', value: 'Akkampalle Village, Anantapur District, Andhra Pradesh', color: 'text-cyber-error' },
  { icon: Users, label: 'Participants', value: '60+ Community Members Reached', color: 'text-cyber-purple' },
];

interface AboutProjectProps {
  isTelugu: boolean;
}

export default function AboutProject({ isTelugu }: AboutProjectProps) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <BookOpen className="w-3 h-3" />
            {isTelugu ? 'ప్రాజెక్ట్ గురించి' : 'About The Project'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'సమాజ సేవా ప్రాజెక్ట్' : 'Community Service Project'}
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            {isTelugu
              ? 'అక్కంపల్లి గ్రామంలో సైబర్ సేఫ్టీ అవేర్‌నెస్ ప్రచారం నిర్వహించి, గ్రామీణ సమాజాన్ని డిజిటల్ భద్రత గురించి శిక్షణ ఇచ్చాం.'
              : 'A structured 8-week community service initiative conducted in Akkampalle Village to educate rural residents about cyber safety, digital literacy, and online fraud prevention.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Info */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-cyber-text mb-6 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-cyber-primary" />
              {isTelugu ? 'ప్రాజెక్ట్ వివరాలు' : 'Project Details'}
            </h3>
            <div className="space-y-4">
              {projectInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border/50 flex items-center justify-center shrink-0 ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-cyber-textMuted mb-0.5">{item.label}</div>
                      <div className="text-sm text-cyber-text font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team & Abstract */}
          <div className="flex flex-col gap-6">
            {/* Team Members */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-text mb-6 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-cyber-accent" />
                {isTelugu ? 'జట్టు సభ్యులు' : 'Team Members'}
              </h3>
              <div className="space-y-3">
                {teamMembers.map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-cyber-bg/50 border border-cyber-border/30 hover:border-cyber-primary/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center text-cyber-primary font-bold text-sm shrink-0">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-cyber-text truncate">{member.name}</div>
                      <div className="text-xs text-cyber-textMuted">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <div className="glass-card p-6 flex-1">
              <h3 className="text-xl font-bold text-cyber-text mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-cyber-warning" />
                {isTelugu ? 'సారాంశం' : 'Abstract'}
              </h3>
              <p className="text-sm text-cyber-textMuted leading-relaxed">
                {isTelugu
                  ? 'అక్కంపల్లి గ్రామంలో స్మార్ట్‌ఫోన్ వినియోగం 78%కి చేరింది, కానీ సైబర్ సేఫ్టీ అవగాహన చాలా తక్కువగా ఉంది. OTP మోసాలు, ఫిషింగ్ స్కాములు మరియు నకిలీ ఉద్యోగ ఆఫర్లు అనేక కుటుంబాలను నష్టపరిచాయి. ఈ ప్రాజెక్ట్ ద్వారా 60+ మంది సమాజ సభ్యులకు సైబర్ భద్రత గురించి శిక్షణ ఇచ్చాం.'
                  : 'With smartphone penetration reaching 78% in Akkampalle Village, residents face escalating cyber threats with minimal awareness. OTP fraud, phishing scams, and fake job offers have caused significant financial harm. This project educated 60+ community members through interactive sessions, workshops, and trained 5 Cyber Safety Ambassadors for sustained impact.'}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: '76%', label: 'Can Identify Phishing', color: 'text-cyber-accent', bg: 'bg-cyber-accent/5', border: 'border-cyber-accent/20' },
            { value: '89%', label: 'Know Helpline 1930', color: 'text-cyber-primary', bg: 'bg-cyber-primary/5', border: 'border-cyber-primary/20' },
            { value: '71%', label: 'Updated Privacy Settings', color: 'text-cyber-warning', bg: 'bg-cyber-warning/5', border: 'border-cyber-warning/20' },
            { value: '18%→76%', label: 'Awareness Improvement', color: 'text-cyber-secondary', bg: 'bg-cyber-secondary/5', border: 'border-cyber-secondary/20' },
          ].map((stat, i) => (
            <div key={i} className={`rounded-xl p-4 border ${stat.bg} ${stat.border} text-center`}>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-cyber-textMuted leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
