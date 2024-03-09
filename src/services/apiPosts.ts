/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from "../lib/supabase";

export const getPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
};

export const getPost = async (postId: any) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }

  return data;
};

export const deletePost = async (postId: any) => {
  const { error } = await supabase.from("posts").delete().eq("id", postId);

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }
};
