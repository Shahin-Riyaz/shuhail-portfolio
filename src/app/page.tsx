"use client";

import type { ReactNode } from "react";
import {
  Box,
  Chip,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const linkedInProfileUrl = "https://www.linkedin.com/in/mohamed-suhail-34446a30b/";

type PastWorkVideo = { kind: "youtube"; videoId: string } | { kind: "file"; src: string };

type PastWork = {
  title: string;
  category: string;
  name: string;
  country: string;
  description: string;
  video?: PastWorkVideo;
};

type Project = {
  emoji: string;
  badge: string;
  title: string;
  meta: string[];
  description: string;
  roles: string[];
};

const skills = [
  "Instagram & TikTok Reels",
  "Video Content",
  "Canva & Design Tools",
  "Campaign Analytics",
  "Facebook Ads",
  "Social Media Strategy",
  "Brand Storytelling",
  "Content Scheduling",
];

const stats = [
  { value: "40%", label: "Engagement Growth" },
  { value: "35%", label: "Brand Visibility" },
  { value: "15%", label: "Sales Growth" },
  { value: "3+", label: "Years Experience" },
];

const jobs = [
  {
    title: "Content Creator & Marketing Executive",
    date: "May 2024 - May 2025",
    company: "Develop Shirts Pvt Ltd",
    points: [
      "Produced social media content (posts, reels, stories) for Instagram and Facebook - achieving 40% engagement increase",
      "Handled visiting models during apparel photoshoots—briefings, on-set coordination, and alignment with photographers and creative direction",
      "Developed promotional materials, product catalogs, and visual assets using Canva",
      "Planned and executed end-to-end digital marketing campaigns, boosting brand visibility by 35%",
      "Monitored and analyzed performance metrics, optimizing strategy in real time",
      "Aligned content strategy with sales team, contributing to 15% monthly sales growth",
    ],
  },
  {
    title: "Sales & Brand Promotion Executive",
    date: "July 2025 - Present",
    company: "Gorgus Trading LLC - Dubai Outlet Mall, UAE",
    points: [
      "Promoted products through engaging, story-driven in-store communication",
      "Maintained visually appealing displays aligned with brand aesthetics",
      "Consistently achieved sales targets through persuasive promotion and customer engagement",
    ],
  },
  {
    title: "Marketing & Sales Executive",
    date: "Jan 2021 - Jun 2023",
    company: "Cool Planet",
    points: [
      "Supported promotional campaigns and seasonal marketing initiatives",
      "Assisted in visual merchandising to improve product presentation",
      "Contributed to 12% increase in store revenue through effective product promotion",
    ],
  },
];

const achievements = [
  {
    icon: "📈",
    title: "40% Engagement Growth",
    text: "Grew social media engagement through targeted content campaigns across platforms.",
  },
  {
    icon: "🎯",
    title: "35% Brand Visibility",
    text: "Boosted brand visibility via strategic digital marketing initiatives.",
  },
  {
    icon: "💰",
    title: "15% Sales Growth",
    text: "Contributed to monthly sales growth through integrated content promotions.",
  },
  {
    icon: "🌐",
    title: "Active Communities",
    text: "Built and managed brand communities across Instagram, Facebook & TikTok.",
  },
];

const tools = [
  "Instagram",
  "TikTok",
  "Facebook",
  "LinkedIn",
  "Canva",
  "Graphic Design Tools",
  "Content Scheduling",
  "Campaign Analytics",
  "Microsoft Excel",
  "PowerPoint",
];

const pastWorks: PastWork[] = [
  {
    title: "UAE retail & brand content",
    category: "Content creation",
    name: "Gorgus Trading LLC",
    country: "United Arab Emirates",
    description:
      "Video content produced for Gorgus Trading in the UAE—product-led storytelling and campaign-ready visuals aligned with the brand’s in-mall and digital presence.",
    video: { kind: "file", src: "/videos/uae_content_creation.mp4" },
  },
  {
    title: "Sri Lanka retail content",
    category: "Content creation",
    name: "Royal Dress Point Pvt Ltd",
    country: "Sri Lanka",
    description:
      "Content creation for Royal Dress Point: showcase pieces, store energy, and narrative framing tailored to social audiences in Sri Lanka.",
    video: { kind: "file", src: `/videos/${encodeURIComponent("sri lanka_content creation.mp4")}` },
  },
  {
    title: "Freelance video editing",
    category: "Freelance · Video editing",
    name: "Freelance client",
    country: "United Arab Emirates",
    description:
      "Independent editing work: pacing, cuts, color consistency, and polish so the final piece reads clearly on social and the web.",
    video: { kind: "file", src: "/videos/freelance_video.mp4" },
  },
];

const projects: Project[] = [
  {
    emoji: "🎬",
    badge: "Action · Thriller",
    title: "Think Twice",
    meta: ["Short Film", "2022", "British College of Applied Studies"],
    description:
      "A student action-thriller short film written and directed during studies at BCAS. A tense, high-stakes story that demonstrates early creative vision, storytelling instinct, and the ability to lead a production from concept to screen.",
    roles: ["Director", "Storyteller", "Student Production"],
  },
  {
    emoji: "📸",
    badge: "Fashion · Brand",
    title: "Develop Shirts — Photoshoot coordination",
    meta: ["Brand campaign", "2024", "Develop Shirts Pvt Ltd"],
    description:
      "Managed the model who came in for Develop Shirts apparel photoshoots: schedules and briefings, on-set coordination with photographers, and keeping shots on-brand for social, catalog, and campaign use.",
    roles: ["Talent coordination", "On-set support", "Brand-aligned production"],
  },
];

function PastWorkVideoPlayer({ video }: { video: PastWorkVideo }) {
  if (video.kind === "youtube") {
    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pt: "56.25%",
          borderRadius: "12px",
          overflow: "hidden",
          bgcolor: "#000",
          border: "1px solid rgba(127,119,221,0.2)",
        }}
      >
        <Box
          component="iframe"
          title="Past work video"
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        bgcolor: "#050508",
        border: "1px solid rgba(127,119,221,0.25)",
        aspectRatio: "16 / 9",
        position: "relative",
      }}
    >
      <Box
        component="video"
        src={video.src}
        controls
        playsInline
        preload="metadata"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          bgcolor: "#000",
        }}
      />
    </Box>
  );
}

const sectionLabelStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1.25,
  mb: 3.5,
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#534AB7",
  fontWeight: 500,
};

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Box sx={{ px: { xs: 2.5, sm: 6, md: 10, lg: 16 }, py: { xs: 5, sm: 5.5, md: 6 }, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <Box sx={sectionLabelStyles}>
        <Typography component="span" sx={{ fontSize: "inherit", letterSpacing: "inherit" }}>
          {label}
        </Typography>
        <Box sx={{ height: "1px", flex: 1, bgcolor: "rgba(83,74,183,0.2)" }} />
      </Box>
      {children}
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#0a0a0f", minHeight: "100vh", color: "#e8e4dc" }}>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            px: { xs: 2.5, sm: 6, md: 10, lg: 16 },
            pt: { xs: 6, sm: 8, md: 10 },
            pb: { xs: 5.5, sm: 7, md: 8 },
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0a0a0f 0%, #111124 50%, #0d0d1a 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(83,74,183,0.18) 0%, transparent 70%)",
            },
          }}
        >
          <Chip
            label="Portfolio"
            sx={{
              mb: 3,
              color: "#7F77DD",
              border: "1px solid rgba(127,119,221,0.3)",
              bgcolor: "transparent",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "11px",
              height: "auto",
              py: 0.3,
              "& .MuiChip-label": { px: 1.75, py: 0.2, fontWeight: 500 },
            }}
          />
          <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: { xs: "40px", sm: "52px" }, lineHeight: 1.1, color: "#f0ece4", mb: 1.2 }}>
            Mohamed Suhail
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#8884a0", fontWeight: 300, mb: 3.5, letterSpacing: "0.5px" }}>
            Content Creator · Digital Marketing & Social Media
          </Typography>

          <Box sx={{ mb: 4.5, display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap" }}>
            <Typography sx={{ fontSize: "13px", color: "#b0accc" }}>📍 Dubai, UAE</Typography>
            <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#534AB7" }} />
            <MuiLink href="tel:+971528470025" underline="none" sx={{ fontSize: "13px", color: "#b0accc" }}>
              +971 52 847 0025
            </MuiLink>
            <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#534AB7" }} />
            <MuiLink href="mailto:mohamedsuhails956@gmail.com" underline="none" sx={{ fontSize: "13px", color: "#b0accc" }}>
              mohamedsuhails956@gmail.com
            </MuiLink>
            <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#534AB7" }} />
            <MuiLink
              href={linkedInProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                fontSize: "13px",
                color: "#b0accc",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.45,
                "&:hover": { color: "#c8c4e0" },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 17, color: "#7F77DD" }} aria-hidden />
              LinkedIn
            </MuiLink>
            <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#534AB7" }} />
            <Typography sx={{ fontSize: "13px", color: "#b0accc" }}>Employment Visa</Typography>
          </Box>

          <Typography sx={{ maxWidth: "620px", fontSize: "15px", lineHeight: 1.8, color: "#9993ae", fontWeight: 300 }}>
            Creative and results-driven content creator with <Box component="strong" sx={{ color: "#c8c4e0", fontWeight: 500 }}>3+ years of experience</Box> in digital marketing,
            social media production, and brand storytelling. Passionate about real estate storytelling and showcasing UAE properties in engaging, innovative ways that connect
            with buyers and investors.
          </Typography>
        </Box>

        <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: { xs: "column", sm: "row" }, px: { xs: 0, sm: 2, md: 4 } }}>
          {stats.map((stat) => (
            <Box key={stat.label} sx={{ flex: 1, px: 4, py: 3, textAlign: "center", borderRight: { sm: "1px solid rgba(255,255,255,0.06)" }, borderBottom: { xs: "1px solid rgba(255,255,255,0.06)", sm: "none" }, "&:last-of-type": { borderBottom: "none", borderRight: "none" } }}>
              <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: "36px", color: "#7F77DD", fontWeight: 700 }}>{stat.value}</Typography>
              <Typography sx={{ mt: 0.5, fontSize: "12px", color: "#6660a0", textTransform: "uppercase", letterSpacing: "1.5px" }}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        <Section label="Skills">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} sx={{ borderRadius: "30px", px: 1, border: "1px solid rgba(127,119,221,0.25)", bgcolor: "rgba(83,74,183,0.07)", color: "#a09cb8", fontSize: "13px" }} />
            ))}
          </Box>
        </Section>

        <Section label="Past works">
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3.5, md: 4.5 } }}>
            {pastWorks.map((work) => (
              <Box
                key={work.title}
                sx={{
                  border: "1px solid rgba(127,119,221,0.22)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  bgcolor: "rgba(8,8,14,0.85)",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.15fr) minmax(0, 0.85fr)" },
                    gap: 0,
                    alignItems: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.25, md: 2.5 },
                      bgcolor: "rgba(0,0,0,0.45)",
                      borderRight: { md: "1px solid rgba(127,119,221,0.12)" },
                      borderBottom: { xs: "1px solid rgba(127,119,221,0.12)", md: "none" },
                    }}
                  >
                    {work.video ? <PastWorkVideoPlayer video={work.video} /> : null}
                  </Box>
                  <Box sx={{ p: { xs: 2.5, sm: 3, md: 3.25 }, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                    <Typography sx={{ fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#534AB7", fontWeight: 600 }}>{work.category}</Typography>
                    <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: { xs: "22px", sm: "24px" }, color: "#f0ece4", lineHeight: 1.2 }}>{work.title}</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                      <Box sx={{ fontSize: "12px", color: "#c8c4e0", bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", px: 1.5, py: 0.55, borderRadius: "20px" }}>
                        {work.name}
                      </Box>
                      <Box sx={{ fontSize: "12px", color: "#6660a0", bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", px: 1.5, py: 0.55, borderRadius: "20px" }}>
                        Country: <Box component="span" sx={{ color: "#c8c4e0" }}>{work.country}</Box>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "14px", color: "#8a86a4", lineHeight: 1.8 }}>{work.description}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        <Section label="Projects">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {projects.map((project) => (
              <Box
                key={project.title}
                sx={{
                  border: "1px solid rgba(127,119,221,0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "rgba(255,255,255,0.02)",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "140px" },
                    minHeight: "180px",
                    background: "linear-gradient(160deg, #1a1530 0%, #0d0d20 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.2,
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: "40px", position: "relative", zIndex: 1 }}>{project.emoji}</Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#7F77DD",
                      border: "1px solid rgba(127,119,221,0.4)",
                      px: 1.25,
                      py: 0.5,
                      borderRadius: "20px",
                      position: "relative",
                      zIndex: 1,
                      bgcolor: "rgba(10,10,15,0.6)",
                      textAlign: "center",
                      maxWidth: "120px",
                    }}
                  >
                    {project.badge}
                  </Typography>
                </Box>
                <Box sx={{ p: { xs: 2.5, sm: 3.5 }, flex: 1 }}>
                  <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: "26px", color: "#f0ece4", mb: 0.8 }}>{project.title}</Typography>
                  <Box sx={{ mb: 2, display: "flex", gap: 1.2, flexWrap: "wrap" }}>
                    {project.meta.map((meta) => (
                      <Box key={meta} sx={{ fontSize: "12px", color: "#6660a0", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", px: 1.5, py: 0.5, borderRadius: "20px" }}>
                        {meta}
                      </Box>
                    ))}
                  </Box>
                  <Typography sx={{ fontSize: "14px", color: "#7e7a98", lineHeight: 1.75, mb: 2.25 }}>{project.description}</Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {project.roles.map((role) => (
                      <Box key={role} sx={{ fontSize: "12px", px: 1.75, py: 0.5, borderRadius: "20px", bgcolor: "rgba(83,74,183,0.15)", border: "1px solid rgba(83,74,183,0.3)", color: "#a09cd8" }}>
                        {role}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        <Section label="Experience">
          {jobs.map((job, idx) => (
            <Box key={job.title} sx={{ mb: idx === jobs.length - 1 ? 0 : 4.5, pb: idx === jobs.length - 1 ? 0 : 4.5, borderBottom: idx === jobs.length - 1 ? "none" : "1px solid rgba(255,255,255,0.04)" }}>
              <Box sx={{ mb: 0.8, display: "flex", justifyContent: "space-between", gap: 1, flexWrap: "wrap" }}>
                <Typography sx={{ fontSize: "17px", color: "#e0dcf0", fontWeight: 500 }}>{job.title}</Typography>
                <Box sx={{ fontSize: "12px", color: "#534AB7", bgcolor: "rgba(83,74,183,0.12)", px: 1.5, py: 0.5, borderRadius: "20px", whiteSpace: "nowrap" }}>{job.date}</Box>
              </Box>
              <Typography sx={{ fontSize: "13px", color: "#7F77DD", mb: 1.75 }}>{job.company}</Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {job.points.map((point) => (
                  <Typography key={point} component="li" sx={{ fontSize: "14px", color: "#7e7a98", lineHeight: 1.7, py: 0.6, pl: 2, position: "relative", "&::before": { content: '""', position: "absolute", left: 0, top: "15px", width: "5px", height: "1px", bgcolor: "#534AB7" } }}>
                    {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Section>

        <Section label="Key Achievements">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {achievements.map((item) => (
              <Box key={item.title} sx={{ background: "rgba(83,74,183,0.07)", border: "1px solid rgba(83,74,183,0.15)", borderRadius: "12px", p: 2.5 }}>
                <Typography sx={{ fontSize: "22px", mb: 1 }}>{item.icon}</Typography>
                <Typography sx={{ fontSize: "16px", color: "#c8c4e0", mb: 0.5 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: "14px", color: "#9993b8", lineHeight: 1.6 }}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Section>

        <Section label="Tools & Platforms">
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {tools.map((tool) => (
              <Box key={tool} sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1.2, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", fontSize: "13px", color: "#8884a0" }}>
                <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", bgcolor: "#7F77DD", flexShrink: 0 }} />
                {tool}
              </Box>
            ))}
          </Box>
        </Section>

        <Section label="Education">
          {[
            {
              degree: "Higher National Diploma in Business Management (UK)",
              school: "ICBT Campus, Sri Lanka",
              year: "2022 - 2024",
            },
            {
              degree: "Diploma in English",
              school: "British College of Applied Studies (BCAS)",
              year: "2022",
            },
          ].map((edu, idx, arr) => (
            <Box key={edu.degree} sx={{ py: 2, borderBottom: idx === arr.length - 1 ? "none" : "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", gap: 1, flexWrap: "wrap" }}>
              <Box>
                <Typography sx={{ fontSize: "15px", color: "#d4d0e8", fontWeight: 500 }}>{edu.degree}</Typography>
                <Typography sx={{ fontSize: "13px", color: "#6660a0", mt: 0.2 }}>{edu.school}</Typography>
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#534AB7", alignSelf: "center" }}>{edu.year}</Typography>
            </Box>
          ))}
        </Section>

        <Section label="Languages">
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {[
              ["EN", "English - Fluent"],
              ["TA", "Tamil - Fluent"],
              ["AR", "Arabic - Basic"],
            ].map(([code, label]) => (
              <Box key={code} sx={{ px: 2.5, py: 1.2, borderRadius: "8px", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "13px", color: "#9993b8" }}>
                <Box component="span" sx={{ color: "#534AB7", fontWeight: 500, mr: 0.7 }}>
                  {code}
                </Box>
                {label}
              </Box>
            ))}
          </Box>
        </Section>

        <Box
          sx={{
            px: { xs: 2.5, sm: 6, md: 10, lg: 16 },
            py: 4,
            textAlign: "center",
            fontSize: "12px",
            color: "#3f3c60",
            letterSpacing: "0.5px",
            bgcolor: "#07070d",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Typography component="span" sx={{ fontSize: "inherit", color: "inherit", letterSpacing: "inherit" }}>
            Mohamed Suhail · Content Creator · Dubai, UAE ·
          </Typography>{" "}
          <MuiLink
            href={linkedInProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontSize: "inherit", color: "#534AB7", letterSpacing: "inherit" }}
          >
            LinkedIn
          </MuiLink>
          <Typography component="span" sx={{ fontSize: "inherit", color: "inherit", letterSpacing: "inherit" }}>
            {" "}
            · 2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
