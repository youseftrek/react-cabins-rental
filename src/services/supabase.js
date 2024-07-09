import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cwsoygrrnvzfuvkppuzo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3c295Z3JybnZ6ZnV2a3BwdXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzNTA1MDcsImV4cCI6MjAzNTkyNjUwN30.WfaBeneKrXqzEys-8q1WypiNonMuHxqZ_5rQ9cWfDGQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
