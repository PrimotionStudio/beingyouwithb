import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class API_Error extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}
export type API_Error_Type = typeof API_Error;

export function handleServerError(error: unknown) {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: error.issues[0].message },
      { status: 400 },
    );
  }

  if (error instanceof API_Error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.code },
    );
  }

  if (error instanceof Error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 },
  );
}
