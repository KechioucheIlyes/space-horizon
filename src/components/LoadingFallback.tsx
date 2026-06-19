const LoadingFallback = () => {
  return (
    <main className="min-h-screen grid place-items-center bg-background px-4 text-center">
      <div>
        <p className="text-3xl font-bold">Space Horizon</p>
        <p className="mt-3 text-muted-foreground">connexion à l'espace...</p>
      </div>
    </main>
  )
}

export default LoadingFallback
