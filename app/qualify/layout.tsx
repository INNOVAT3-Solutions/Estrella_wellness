import { BookingFooter, BookingHeader } from "@/components/booking/booking-chrome";

export default function QualifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-mist-50 font-heading">
      <BookingHeader />
      <div className="container-x py-10 sm:py-14">{children}</div>
      <BookingFooter />
    </div>
  );
}
