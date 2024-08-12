/** @type {import('next').NextConfig}*/
const nextConfig = {
    images:{
        domains:['images.unsplash.com', 'res.cloudinary.com',],
      remotePatterns: [
           {
            protocol: "https",
            hostname: "**",
          },
    ],
    },
    

    async headers() {
        return [
          {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=0, must-revalidate',
              }
            ],
          },
        ]
     },
   
};
export default nextConfig;
