export function middleware(req) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  if (isMaintenanceMode) {
    // Arahkan ke halaman pemeliharaan
    return Response.redirect('/maintenance.html', 302);
  }

  // Lanjutkan ke halaman biasa jika tidak dalam mode pemeliharaan
  return Response.next();
}
