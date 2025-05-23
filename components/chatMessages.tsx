import ListMessages from './listMessages'
import { supabaseServer } from '@/lib/supabase/server'

export default async function ChatMessages() {
    const supabase = supabaseServer();

    const { data } = await (await supabase).from("messages").select("*,users(*)");

    console.log(data);

    // const messages = Array.isArray(data) ? data : [];
    const messages = JSON.parse(JSON.stringify(data || [])); 

  return <ListMessages  messages={messages || {}}/>
}
