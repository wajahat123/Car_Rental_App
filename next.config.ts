import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: "carsrentbackend.vercel.app",
              port: '',
              pathname: '/uploads/**',
              search: '',
            },
          ],
        },
    
};

export default nextConfig;
