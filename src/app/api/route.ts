import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const token = request.cookies.get('ACESS_TOKEN_KEY')
  return token;
}