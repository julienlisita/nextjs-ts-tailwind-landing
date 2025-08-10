import { loginHandler } from '@/server/controllers/auth.controller';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return loginHandler(req);
}
