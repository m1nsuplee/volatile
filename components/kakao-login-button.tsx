'use client';

import KakaoSymbol from '@/assets/kakao-symbol.svg';
import { supabaseKey, supabaseUrl } from '@/lib/config';
import { Pathname } from '@/lib/constants';
import { Database } from '@/types/db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import clsx from 'clsx';

const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export function KakaoLoginButton() {
  const authService = createClientComponentClient<Database>({
    supabaseUrl,
    supabaseKey,
  }).auth;

  const handleKakaoLoginButtonClick = async () => {
    try {
      await authService.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${baseURL}${Pathname.KAKAO_AUTH}`,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('로그인 실패');
      }
    }
  };

  return (
    <button
      id="kakao-login-button"
      type="button"
      className={clsx(
        'w-52 h-10 bg-[#FEE500] rounded text-[#191919]',
        'flex justify-center items-center tracking-tighter gap-x-2'
      )}
      onClick={handleKakaoLoginButtonClick}
    >
      <KakaoSymbol />
      <span>카카오로 시작하기</span>
    </button>
  );
}
