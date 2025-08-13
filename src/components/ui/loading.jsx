export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 rounded-full border-[#FFCC00] border-t-transparent animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-[#FFCC00]">Loading...</p>
    </div>
  );
}
