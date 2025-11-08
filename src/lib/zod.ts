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
  comments: z.array(commentSchema).optional(),
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

export const summarySchema = z.object({
  postCount: z.number(),
  commentCounts: z.number(),
  messageCounts: z.number(),
  recentPosts: z.array(postSchema.omit({ comments: true })),
  recentMessages: z.array(contactSchema),
  recentActivity: z.number(),
});
export type SummaryType = z.infer<typeof summarySchema>;
