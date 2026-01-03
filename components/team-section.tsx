import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Ndirangu Charles",
    role: "Chief Security Officer",
    experience: "5+ years",
    certifications: ["CCT", "API SEC",],
    specialties: ["Penetration Testing", "Security Architecture", "Incident Response"],
    bio: "Cybersecurity technician with Expirience in Cybersecurity Auditing, penetration testing , Trainings,S.O.C Analyst and API security.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Security Experts
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Meet our team of certified cybersecurity professionals who protect organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 group hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyan-400/20 group-hover:border-cyan-400/50 transition-all"
                  />
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2">
                    <div className="bg-cyan-400 text-slate-900 px-2 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-slate-700">
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4 text-slate-300 hover:text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-400 transition-colors">
                    <Twitter className="w-4 h-4 text-slate-300 hover:text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
