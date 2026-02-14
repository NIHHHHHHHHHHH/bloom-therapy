import AnimatedDiv from '@/components/Resuable/AnimatedDiv'

export default function DetailedBio() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 xs:px-12 xl:px-14 2xl:px-16">
      <div className="max-w-full">
        <AnimatedDiv className="space-y-6 text-base lg:text-lg text-foreground leading-relaxed">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-8">
            My Practice
          </h2>
          <p>
            I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p>
            My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
          </p>
          <p>
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
          </p>
          <p>
            Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
          </p>
          <p>
            In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
          </p>

        </AnimatedDiv>
      </div>
    </section>
  )
}