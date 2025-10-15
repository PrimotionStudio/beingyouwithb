import { Mail, Phone, Clock, Trash2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactsPage() {
  // Mock data - replace with real data from your database
  const contacts = [
    {
      id: "1",
      name: "Sarah Mitchell",
      email: "sarah.m@email.com",
      phone: "+1 (555) 123-4567",
      details:
        "I've been struggling with anxiety and would love to talk about how you might be able to help. Your reflections on letting go really resonated with me.",
      preferredContactMethod: "Email",
      preferredTime: "Evening",
      date: new Date("2024-01-18T14:30:00"),
      status: "new",
    },
    {
      id: "2",
      name: "John Davidson",
      email: "john.d@email.com",
      phone: "+1 (555) 234-5678",
      details:
        "Your reflections have been so helpful. I'd like to schedule a session to discuss some personal challenges I'm facing.",
      preferredContactMethod: "Phone",
      preferredTime: "Morning",
      date: new Date("2024-01-18T10:15:00"),
      status: "new",
    },
    {
      id: "3",
      name: "Emily Chen",
      email: "emily.c@email.com",
      phone: "+1 (555) 345-6789",
      details:
        "I'm interested in learning more about your approach to emotional wellbeing. Could we set up a time to talk?",
      preferredContactMethod: "Either",
      preferredTime: "Afternoon",
      date: new Date("2024-01-17T16:45:00"),
      status: "contacted",
    },
  ];

  const newContacts = contacts.filter((c) => c.status === "new").length;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-900">
          Reach Out Messages
        </h1>
        <p className="text-sage-600 mt-2">
          People seeking connection and support
        </p>
        <p className="text-sm text-sage-500 mt-1">
          {newContacts} new {newContacts === 1 ? "message" : "messages"}
        </p>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            className={`border-sage-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow ${
              contact.status === "new" ? "ring-2 ring-sage-300/50" : ""
            }`}
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="font-serif text-sage-900 text-xl">
                      {contact.name}
                    </CardTitle>
                    {contact.status === "new" && (
                      <Badge className="bg-sage-600 text-white">New</Badge>
                    )}
                    {contact.status === "contacted" && (
                      <Badge
                        variant="outline"
                        className="border-sage-300 text-sage-700"
                      >
                        Contacted
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-sage-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">
                        {contact.date.toLocaleDateString()} at{" "}
                        {contact.date.toLocaleTimeString()}
                      </span>
                    </div>
                  </CardDescription>
                </div>
                <div className="flex sm:flex-col gap-2">
                  <Button
                    size="sm"
                    className="bg-sage-600 hover:bg-sage-700 text-white gap-2"
                  >
                    <CheckCircle className="w-3 h-3" />
                    Mark Contacted
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-sage-700 mb-2">
                  Message
                </h4>
                <p className="text-sage-800 leading-relaxed">
                  {contact.details}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-sage-600">Preferred Contact: </span>
                  <span className="text-sage-900 font-medium">
                    {contact.preferredContactMethod}
                  </span>
                </div>
                <div>
                  <span className="text-sage-600">Preferred Time: </span>
                  <span className="text-sage-900 font-medium">
                    {contact.preferredTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {contacts.length === 0 && (
        <Card className="border-sage-200/50 bg-white/80 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Mail className="w-16 h-16 text-sage-300 mb-4" />
            <h3 className="font-serif text-2xl text-sage-900 mb-2">
              No messages yet
            </h3>
            <p className="text-sage-600 max-w-md">
              When people reach out for support, their messages will appear here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
