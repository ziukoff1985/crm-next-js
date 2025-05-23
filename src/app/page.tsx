import AddCompanyButton from './components/add-company-button';

// import StatusLabel, { Status } from './components/status-label';
export default function Home() {
  return (
    <main>
      <h1 className="mb-4 text-4xl font-bold text-blue-600 underline">
        Home Page {new Date().toTimeString()}
      </h1>
      <AddCompanyButton />
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
