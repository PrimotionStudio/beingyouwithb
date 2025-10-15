import z from "zod";

export const userSchema = z.object({
  id: z.uuid(),
  username: z.string(),
  password: z.string(),
});
export type UserType = z.infer<typeof userSchema>;

export const commentSchema = z.object({
  id: z.uuid(),
  postId: z.uuid(),
  content: z.string(),
  date: z.date(),
});
export type CommentType = z.infer<typeof commentSchema>;

export const postSchema = z.object({
  id: z.uuid(),
  image: z.url().optional(),
  slug: z.string(),
  quote: z.string(),
  title: z.string(),
  content: z.string(),
  date: z.date(),
  comments: z.array(commentSchema),
});
export type PostType = z.infer<typeof postSchema>;

export const contactSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  details: z.string(),
  preferredContactMethod: z
    .enum(["Email", "Phone", "Either"])
    .default("Either"),
  preferredTime: z
    .enum(["Morning", "Afternoon", "Evening", "Weekends"])
    .default("Weekends"),
  date: z.date(),
});
export type ContactType = z.infer<typeof contactSchema>;
