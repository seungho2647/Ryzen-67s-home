import { createClient } from '@supabase/supabase-js'

// Next.js 환경에서는 환경 변수를 process.env로 읽어옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)