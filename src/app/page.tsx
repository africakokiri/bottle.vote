import { PopularVotes } from "@/components/PopularVotes";
import { LinkButton } from "@/components/ui/LinkButton";

import * as motion from "motion/react-client";

export default function page() {
  return (
    <div className="container space-y-8">
      {/* Hero */}
      <div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-element mx-auto flex max-w-3xl flex-col items-center justify-center gap-8
rounded-2xl border px-8 py-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              <span className="gradient-text">당신의 의견을 담아</span>
              <br />
              <span className="mt-2 block">목소리를 공유하세요</span>
            </h2>
          </div>
          <p className="text-center text-lg font-semibold break-keep md:text-xl">
            투표를 생성하고, 의견을 모으고, 결과를 시각화하세요.
          </p>

          <div className="flex items-center gap-4">
            <LinkButton
              href="/vote/create"
              className="gradient-bg"
            >
              투표 생성하기
            </LinkButton>
            <LinkButton
              href="/vote/list"
              className="bg-element border"
            >
              투표 둘러보기
            </LinkButton>
          </div>
        </motion.section>
      </div>

      {/* 인기 투표 */}
      <PopularVotes howMany={9} />

      <div className="mb-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <LinkButton
            href="/vote/list"
            className="gradient-bg"
          >
            더 많은 투표 보기
          </LinkButton>
        </motion.div>
      </div>
    </div>
  );
}
