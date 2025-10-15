"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserType } from "@/lib/zod";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<Omit<UserType, "id">>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) return toast.error(data.message);

      toast("Login successful!");
      router.push("/admin-area/home");
    } catch (error) {
      toast.error("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="w-full shadow-2xl border-0 bg-white backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <Link href="/" className="text-primary">
              <Image
                src="/beingyouwithb.jpg"
                alt=""
                height={30}
                width={130}
                className="rounded-lg bg-transparent flex items-center justify-center mx-auto w-[130px] h-[120px]"
              />
            </Link>
            <CardTitle className="text-2xl font-semibold text-balance">
              Welcome back
            </CardTitle>
            <CardDescription className="text-muted-foreground text-pretty">
              Sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                  className="h-11 bg-input border-border focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                  className="h-11 bg-input border-border focus:ring-primary focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
