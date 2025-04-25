type Props = {
  children: React.ReactNode
}

export default async function Layout( { children }: Props ) {
  return (
    <div className="min-h-screen flex sm:items-center sm:mt-0 mt-[100px] justify-center">
      <div className="container box-border mx-auto sm:w-[30vw] w-[100vw] p-4">
        {children}
      </div>
    </div>
  )
}