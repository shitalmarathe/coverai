import Link from "next/link";
export default function Page() {
  return (
    
    <div className="min-h-screen">
      <h3 className="text-amber-400">Hello world</h3>
      <Link href="/login">Go to login page</Link>
    </div>
  );
}