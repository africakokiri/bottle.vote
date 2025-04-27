import { LinkButton } from "@/ui/link-button";

import * as motion from "motion/react-client";

export default function page() {
  return (
    <div className="container">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-element mx-auto flex max-w-3xl flex-col items-center justify-center gap-8
rounded-2xl border px-8 py-12"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-gradient">당신의 의견을 담아</span>
            <br />
            <span className="mt-2 block">목소리를 공유하세요</span>
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <LinkButton
            href="/vote/create"
            className="bg-gradient"
          >
            투표 생성하기
          </LinkButton>
          <LinkButton href="/vote/list">투표 둘러보기</LinkButton>
        </div>
      </motion.section>
    </div>
  );
}
