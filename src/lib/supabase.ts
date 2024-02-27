import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://virxlgifoqxurmjlepnd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcnhsZ2lmb3F4dXJtamxlcG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNjkwMzQsImV4cCI6MjAyNDY0NTAzNH0.HP_KtU7fDDA_IbL5022kQgLm0RvcvjVzk5T5YgwiWz0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
