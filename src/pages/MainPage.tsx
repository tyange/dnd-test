import Layout from "../components/Layout/Layout";
import PageDetail from "../components/PageDetail/PageDetail";

const fakePage = {
  Files: [
    {
      Id: "33f54f0f-0130-41c5-8f1a-fb74c2174970",
      IsDir: false,
      ModTime: "2024-05-22T22:13:55.8622072+09:00",
      Mode: 493,
      Name: "random_file_1.mp4",
      Path: "/random/path/to/file_1.mp4",
      Size: 2746253827,
    },
    {
      Id: "1b3dfb94-246c-4547-84c2-7e0674144a20",
      IsDir: false,
      ModTime: "2024-05-23T20:58:19.0580472+09:00",
      Mode: 493,
      Name: "random_file_2.mp4",
      Path: "/random/path/to/file_2.mp4",
      Size: 2367031953,
    },
    {
      Id: "5d9ed436-8e6a-4391-8a50-f644df9981cb",
      IsDir: false,
      ModTime: "2024-05-22T22:40:58.5514712+09:00",
      Mode: 493,
      Name: "random_file_3.mp4",
      Path: "/random/path/to/file_3.mp4",
      Size: 2322004953,
    },
    {
      Id: "c353d80f-2457-4a6b-877f-fdc6ec61b15a",
      IsDir: false,
      ModTime: "2023-01-27T20:33:47.9312708+09:00",
      Mode: 493,
      Name: "random_file_4.mkv",
      Path: "/random/path/to/file_4.mkv",
      Size: 4820238132,
    },
    {
      Id: "61d8ee41-0c7c-42db-8f54-f0166240bd03",
      IsDir: false,
      ModTime: "2024-05-23T20:41:58.0425805+09:00",
      Mode: 493,
      Name: "random_file_5.mp4",
      Path: "/random/path/to/file_5.mp4",
      Size: 8408647998,
    },
    {
      Id: "e05741b8-4c76-481b-8f0d-d5d37659c593",
      IsDir: false,
      ModTime: "2024-05-23T20:52:18.2174961+09:00",
      Mode: 493,
      Name: "random_file_6.mp4",
      Path: "/random/path/to/file_6.mp4",
      Size: 6495540065,
    },
    {
      Id: "74deb4c9-311e-4ff7-9550-30b8d9349cf6",
      IsDir: false,
      ModTime: "2024-05-22T22:25:15.6389751+09:00",
      Mode: 493,
      Name: "random_file_7.mp4",
      Path: "/random/path/to/file_7.mp4",
      Size: 5450135560,
    },
    {
      Id: "3940e9c2-9519-4ae9-a411-13ac25bf77f9",
      IsDir: false,
      ModTime: "2024-05-23T08:07:00.8952694+09:00",
      Mode: 493,
      Name: "random_file_8.mp4",
      Path: "/random/path/to/file_8.mp4",
      Size: 5317611040,
    },
    {
      Id: "13028aa0-8da1-4fc0-85b3-b26f2d232c90",
      IsDir: false,
      ModTime: "2024-05-23T08:14:41.5570332+09:00",
      Mode: 493,
      Name: "random_file_9.mp4",
      Path: "/random/path/to/file_9.mp4",
      Size: 5281126923,
    },
    {
      Id: "ac7d638a-a44b-4f1a-8755-391add9248e5",
      IsDir: false,
      ModTime: "2024-05-23T19:52:02.5359213+09:00",
      Mode: 493,
      Name: "random_file_10.mp4",
      Path: "/random/path/to/file_10.mp4",
      Size: 6345291337,
    },
    {
      Id: "43e383be-7792-4094-b34f-4e1a4d8df433",
      IsDir: false,
      ModTime: "2024-05-22T23:38:32.1738633+09:00",
      Mode: 493,
      Name: "random_file_11.mp4",
      Path: "/random/path/to/file_11.mp4",
      Size: 10231146787,
    },
    {
      Id: "04a8de12-561c-40b9-8092-6ccfc36d6710",
      IsDir: false,
      ModTime: "2024-05-22T22:48:55.4367525+09:00",
      Mode: 493,
      Name: "random_file_12.mp4",
      Path: "/random/path/to/file_12.mp4",
      Size: 4692183979,
    },
    {
      Id: "b256adcb-375c-404c-a261-7a09212c9a6b",
      IsDir: false,
      ModTime: "2024-05-22T23:01:24.0676232+09:00",
      Mode: 493,
      Name: "random_file_13.mp4",
      Path: "/random/path/to/file_13.mp4",
      Size: 5769563522,
    },
    {
      Id: "78d8e990-b7ee-474b-b6fe-1897b86b8305",
      IsDir: false,
      ModTime: "2024-05-23T08:41:00.3925661+09:00",
      Mode: 493,
      Name: "random_file_14.mp4",
      Path: "/random/path/to/file_14.mp4",
      Size: 5326750856,
    },
    {
      Id: "0f601c69-aac5-456f-967a-34fff9115afe",
      IsDir: false,
      ModTime: "2024-05-22T22:36:34.8546911+09:00",
      Mode: 493,
      Name: "random_file_15.mp4",
      Path: "/random/path/to/file_15.mp4",
      Size: 5716337658,
    },
    {
      Id: "04ce5215-e88e-4c57-a6e8-dfc9da8a351e",
      IsDir: false,
      ModTime: "2024-05-22T23:10:01.7331383+09:00",
      Mode: 493,
      Name: "random_file_16.mp4",
      Path: "/random/path/to/file_16.mp4",
      Size: 5324415505,
    },
  ],
  Id: "abb064d9-33c4-4923-bf44-be47bb789637",
  Name: "test-usb-drive",
  Notdirs: [
    {
      Id: "f885ca46-dc59-40ef-9f83-77212d15e9f5",
      Name: "1",
      Files: [],
    },
    {
      Id: "32fe19ba-1185-4a52-b7e5-de5ead85dab0",
      Name: "2",
      Files: [],
    },
    {
      Id: "f0c508fb-e2d8-4ab7-a20b-69efb85e20d7",
      Name: "3",
      Files: [],
    },
    {
      Id: "c64d5470-50e1-4208-b47c-bd58b8595a57",
      Name: "4",
      Files: [],
    },
  ],
};

export default function MainPage() {
  return (
    <Layout>
      <div className="flex-1 relative">
        <PageDetail page={fakePage} />
      </div>
    </Layout>
  );
}
