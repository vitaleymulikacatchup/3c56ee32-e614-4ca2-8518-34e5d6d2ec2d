"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Bolt, Fuel, Gauge, Mail, MapPin, Phone, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Audi SQ5 Fanclub"
          navItems={[
            { name: "About", id: "about" },
            { name: "Models", id: "models" },
            { name: "Performance", id: "performance" },
            { name: "Community", id: "community" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="The Audi SQ5 Experience"
          description="Join the ultimate fanclub for Audi SQ5 enthusiasts. Explore the fusion of performance, luxury, and cutting-edge German engineering."
          buttons={[
            { text: "Join Fanclub", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880413096-uwg6gylk.jpg"
          imageAlt="Audi SQ5 luxury performance vehicle"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          title="About Our Fanclub"
          description="We are a dedicated community of Audi SQ5 enthusiasts passionate about performance, design, and luxury automotive excellence. Our fanclub brings together owners, admirers, and SQ5 lovers from around the world to share experiences, knowledge, and celebrate the engineering marvel that is the Audi SQ5."
          tag="Our Mission"
          buttons={[
            { text: "Become a Member", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880414259-1bxk2iqx.jpg"
          imageAlt="Audi SQ5 side profile"
        />
      </div>

      <div id="models" data-section="models">
        <ProductCardSeven
          title="SQ5 Model Lineup"
          description="Explore the complete Audi SQ5 range featuring premium performance variants"
          tag="Latest Models"
          products={[
            {
              id: "1",
              name: "SQ5 Prestige",
              price: "Luxury Edition",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880414259-1bxk2iqx.jpg",
              imageAlt: "Audi SQ5 Prestige model"
            },
            {
              id: "2",
              name: "SQ5 Premium Plus",
              price: "Performance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880415463-agbelbho.jpg",
              imageAlt: "Audi SQ5 Premium Plus variant"
            },
            {
              id: "3",
              name: "SQ5 Technik",
              price: "Advanced Tech",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880416613-vnob0swq.jpg",
              imageAlt: "Audi SQ5 Technik edition"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="performance" data-section="performance">
        <MetricCardThree
          title="SQ5 Performance Metrics"
          description="Experience world-class automotive performance and innovation"
          tag="Engineering Excellence"
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "Horsepower",
              value: "349 hp"
            },
            {
              id: "2",
              icon: Gauge,
              title: "Top Speed",
              value: "155 mph"
            },
            {
              id: "3",
              icon: Bolt,
              title: "Acceleration",
              value: "4.7 seconds"
            },
            {
              id: "4",
              icon: Fuel,
              title: "Efficiency",
              value: "24 mpg"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="community" data-section="community">
        <TestimonialCardThirteen
          title="What Our Members Say"
          description="Hear from passionate Audi SQ5 enthusiasts who are part of our growing community"
          tag="Community Voices"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              handle: "@marcusq5",
              testimonial: "Being part of this fanclub has connected me with fellow SQ5 lovers worldwide. The events and community spirit are unmatched!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880421510-72ztgbry.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",
              name: "Sarah Chen",
              handle: "@sarahsq5",
              testimonial: "The knowledge sharing and technical discussions in this community have helped me understand my SQ5 on a deeper level.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880422558-vug4liqe.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "David Mueller",
              handle: "@davidm_sq5",
              testimonial: "Attending the fanclub meetups and car shows has been incredible. Best decision joining this passionate community.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880423618-22g9eh3q.jpg",
              imageAlt: "David Mueller"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              handle: "@emmasq5lover",
              testimonial: "From networking to exclusive previews, this fanclub delivers premium benefits that justify every moment invested.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880425211-3g0svm0j.png",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "5",
              name: "James Park",
              handle: "@jamesq5",
              testimonial: "The technical expertise and camaraderie among members is truly special. This is the SQ5 family I always wanted.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880426264-j2ttvc3l.jpg",
              imageAlt: "James Park"
            },
            {
              id: "6",
              name: "Lisa Thompson",
              handle: "@lisasq5",
              testimonial: "Exceptional community that celebrates the art of automotive excellence. Proud to be part of something truly special.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880427314-quy8g150.jpg",
              imageAlt: "Lisa Thompson"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Join the SQ5 Fanclub"
          description="Become part of an exclusive community of Audi SQ5 enthusiasts. Fill out the form below to start your membership journey and gain access to exclusive events, insider updates, and premium community benefits."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "sq5Model",
              type: "text",
              placeholder: "Your SQ5 Model Year",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your SQ5 passion and why you want to join...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765880428370-ts4q5cof.jpg"
          imageAlt="Fanclub membership office"
          mediaPosition="right"
          buttonText="Join Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Audi SQ5 Fanclub"
          columns={[
            {
              title: "Community",
              items: [
                { label: "About Us", href: "about" },
                { label: "Members", href: "community" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "SQ5 Models", href: "models" },
                { label: "Performance Info", href: "performance" },
                { label: "FAQ", href: "https://www.audi.com" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Subscribe", href: "contact" },
                { label: "Support", href: "https://www.audi.com/support" }
              ]
            }
          ]}
          title="Experience Automotive Excellence with the Audi SQ5 Fanclub"
          contactItems={[
            {
              icon: Mail,
              text: "hello@sq5fanclub.com"
            },
            {
              icon: Phone,
              text: "+1 (555) 123-4567"
            },
            {
              icon: MapPin,
              text: "Premium Automotive Community"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}